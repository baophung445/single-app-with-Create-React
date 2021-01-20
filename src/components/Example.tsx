import React, { useState } from 'react';


function Example(props: any) {
    const [count, setCount] = useState(0);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       count: 0
    //     };
    //   }

    // <div>
    //     <p>Bạn đã bấm {this.state.count} lần</p>
    //     <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    //       Bấm vào tôi
    //     </button>
    //   </div>

    return (
        <div className="prop-component">
            <h2> Bạn đã Click vào {count} lần</h2>
            <button onClick={() => setCount(count + 1)}>
                Click vào tôi
            </button>
            <h5>Hello, {props.name}</h5>
            <h5> {props.age}</h5>
            <h5> {props.School}</h5>
            <h5> {props.address} </h5>

        </div>
    )
}

export default Example;