/*
 * util.js
 *  Author: Graham Whealan
 *  Data:   9/25/2023
 *  About:  Stores utility functions used by script.js
 */

function IntersectRect(r1, r2)
{
	let x1 = Math.max(r1.left, r2.left);
	let y1 = Math.max(r1.top, r2.top);

	let x2 = Math.min(r1.right, r2.right);
	let y2 = Math.min(r1.bottom, r2.bottom);

	if (x1<x2 && y1<y2)
		return new DOMRect(x1, y1, x2-x1, y2-y1);
	return null;
}

/*const RectToString = (r) => `{[${r.x}, ${r.y}], [${r.width}, ${r.height}]}`;*/

function PositionInVisibleParent(elem, ax=0.5, ay=0.5)
{
	let winRect		= new DOMRect(0, 0, window.innerWidth, window.innerHeight);
	let elemRect	= elem.getBoundingClientRect();
	let parRect		= elem.parentElement.getBoundingClientRect();
	parRect.x		+= elemRect.width / 2;
	parRect.y		+= elemRect.height / 2;
	parRect.width	-= elemRect.width;
	parRect.height	-= elemRect.height;

	let intersect = IntersectRect(winRect, parRect);
	if (intersect !== null)
	{
		let top		= (intersect.y - parRect.y) + (intersect.height * ay);
		let left	= (intersect.x - parRect.x) + (intersect.width	* ax);
		elem.style.top	= `${top}px`;
		elem.style.left	= `${left}px`;
	}
}

const MapToRatio = (min, max, a) => (max - min) * a + min;

// Some wrapper functions for easy implementation
function CallOnElement(func, elem, ...args)
	{ return () => func(elem, ...args); }
function CallOnElementById(func, id, ...args)
	{ return CallOnElement(func, document.getElementById(id), ...args); }