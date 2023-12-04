import React from 'react'

export default function About(props) {
    let mystyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#141414':'white'
    }
    
  return (
    <div className='container'>
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>About TextTweak</strong>
                </button >
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={mystyle}>This application can be used to edit your text.You can convert your text in uppercase,lowercase,remove extra spaces and also clear the text.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
                <strong>Free to use</strong>
                </button >
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={mystyle}>Use free of cost.You can use this application any time and anywhere.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header"style={mystyle}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={mystyle}>This application offers full compatibility across all browsers, allowing you to use it seamlessly.</div>
                </div>
            </div>
        </div>
    </div>
  )
}
