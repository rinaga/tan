import React from 'react';
import { questions } from './Questionlist';
import './Card.css';



class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value2: '',
           
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleChange2 = this.handleChange2.bind(this);
  

    };

 

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleChange2(event) {
        this.setState({value2: event.target.value});
    }


    render() {
        return (

            <div className="cont">

                <h1>Ha látom is és hallom is a megtanulandó szöveget, nagyon könnyen megjegyzem.</h1>

                <form onSubmit={this.handleSubmit}>
                <label>

                    <input type="radio" id={1} className='one' value={0} name='q1' onChange={this.handleChange}></input>
                    <input type="radio" id={1} className='two' value={1} name='q1' onChange={this.handleChange}></input>
                    <input type="radio" id={1} className='three' value={2} name='q1' onChange={this.handleChange}></input>
                    <input type="radio" id={1} className='four' value={3} name='q1' onChange={this.handleChange}></input>
                    <input type="radio" id={1} className='five' value={4} name='q1' onChange={this.handleChange}></input>
                </label>


                <h1>Hangosan szoktam felolvasni a tananyag szövegét, amikor felkészülök.</h1>
                <label>
                    <input type="radio" id={2} className='one' value={0} name='q2' onChange={this.handleChange2}></input>
                    <input type="radio" id={2} className='two' value={1} name='q2' onChange={this.handleChange2}></input>
                    <input type="radio" id={2} className='three' value={2} name='q2' onChange={this.handleChange2}></input>
                    <input type="radio" id={2} className='four' value={3} name='q2' onChange={this.handleChange2}></input>
                    <input type="radio" id={2} className='five' value={4} name='q2' onChange={this.handleChange2}></input>
                </label>


                <h1>Szívesebben tanulok az osztálytársammal vagy a barátommal, barátnőmmel, mint egyedül.</h1>

                
                <label>

                    <input type="radio" id={3} className='one' value={0} name='q3' onChange={this.handleChange}></input>
                    <input type="radio" id={3} className='two' value={1} name='q3' onChange={this.handleChange}></input>
                    <input type="radio" id={3} className='three' value={2} name='q3' onChange={this.handleChange}></input>
                    <input type="radio" id={3} className='four' value={3} name='q3' onChange={this.handleChange}></input>
                    <input type="radio" id={3} className='five' value={4} name='q3' onChange={this.handleChange}></input>
                </label>


                <h1>Nagyon hasznos számomra, ha a tanár ábrákat mutat be a táblán vagy az írásvetítőn.</h1>
                <label>
                    <input type="radio" id={4} className='one' value={0} name='q4' onChange={this.handleChange2}></input>
                    <input type="radio" id={4} className='two' value={1} name='q4' onChange={this.handleChange2}></input>
                    <input type="radio" id={4} className='three' value={2} name='q4' onChange={this.handleChange2}></input>
                    <input type="radio" id={4} className='four' value={3} name='q4' onChange={this.handleChange2}></input>
                    <input type="radio" id={4} className='five' value={4} name='q4' onChange={this.handleChange2}></input>
                </label>








                </form>


            

                





            </div>

        );


    }
};



export default Card;



/*
                <input type= "radio" id= {1} value= {0} name='q1'></input>
                <input type= "radio" id= {1} value= {1} name='q1'></input>
                <input type= "radio" id= {1} value= {2} name='q1'></input>
                <input type= "radio" id= {1} value= {3} name='q1'></input>
                <input type= "radio" id= {1} value= {4} name='q1'></input>

                */