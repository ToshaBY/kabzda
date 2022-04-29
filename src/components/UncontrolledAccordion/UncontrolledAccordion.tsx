import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    const [state, setState] = useState(true);

    const onClickHandler = () => {
        setState(!state)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={onClickHandler}>TOGGLE</button>
            {!state && <AccordionBody title={props.titleValue}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordion Title rendering")
    return (
        <h3>-- {props.title} --</h3>
    )
}

type AccordionBodyPropsType = {
    title: string;
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("UncontrolledAccordion Body rendering")
    return (
        <ul>
            <li>1 {props.title}</li>
            <li>2 {props.title}</li>
            <li>3 {props.title}</li>
        </ul>
    )
}

export default UncontrolledAccordion;