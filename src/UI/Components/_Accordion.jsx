import React from "react";
import icon_arrowUp from "../../assets/images/icons/arrowUpIcon.svg";
import icon_arrowDown from "../../assets/images/icons/arrowDownIcon.svg";

import { Accordion, AccordionContext, Card, useAccordionButton } from "react-bootstrap";
import { useContext } from "react";

export default function AccordionC({ children }) {
	return <Accordion className="accordionC">{children}</Accordion>;
}

export function AccordionCItem({ index, title = [], children = [] }) {
	function CustomToggle({ eventKey, className, elem }) {
		const { activeEventKey } = useContext(AccordionContext);
		const doCollpase = useAccordionButton(eventKey, () => {});
		const isCurrentEventKey = activeEventKey === eventKey;
		return (
			<button className={className} type="button" onClick={doCollpase}>
				<div className={"accordion__itemTitle " + (isCurrentEventKey ? "accordion__itemTitle--active" : "")}>
					<span>{elem}</span>
				</div>
			</button>
		);
	}
	let curIndex = index;
	let curIndex_ = index;

	return (
		<Card className="accordion__item">
			<div className="accordion__itemTitleBox">
				{title.map((titleText) => {
					return <CustomToggle key={Math.random() + 1} eventKey={curIndex++} className={"accordion__btn"} elem={titleText} />;
				})}
			</div>
			{children.map((childElem) => {
				return (
					<Accordion.Collapse key={Math.random()} eventKey={curIndex_++} className="accordion__itemBody">
						<div>{childElem}</div>
					</Accordion.Collapse>
				);
			})}
		</Card>
	);
}

export function AccordionChild({ children }) {
	return <Accordion className="accordionChild">{children}</Accordion>;
}

export function AccordionChildItem({ index, title, children }) {
	function CustomToggle({ eventKey, className, text }) {
		const { activeEventKey } = useContext(AccordionContext);
		const doCollpase = useAccordionButton(eventKey, () => {});
		const isCurrentEventKey = activeEventKey === eventKey;
		return (
			<button className={className} type="button " onClick={doCollpase}>
				{text}
				<img src={isCurrentEventKey ? icon_arrowDown : icon_arrowUp} className="img-fluid ms-2" alt="" />
			</button>
		);
	}
	return (
		<div className="accordionChild-item">
			<div className="accordionChild-item__head">
				<CustomToggle className={"accordionChild-item__head-btn"} eventKey={index} text={title} />
			</div>
			<Accordion.Collapse eventKey={index} className="accordionChild-item__body">
				{children}
			</Accordion.Collapse>
		</div>
	);
}
