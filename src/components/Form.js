import React , {Component} from 'react';
import { Col , Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios'

class Reaservation_form extends Component{

  state = {
    name: '',
    email: '',
  }

      handleSubmit = (e) => {
        console.log("clicking on button")
          e.preventDefault()

          const data = {
            name: this.state.name,
            email: this.state.email
          }

          axios.post("http://localhost:3001/posts" , data)
          .then(res=> res.data)



          this.setState({
              name: '',
              email: '',
             
          })
      }

    handleChange = (e) => {
        if (e.target.id === 'name') {
            this.setState({
              name: e.target.value
            })
        } else if (e.target.id === 'email') {
            this.setState({
              email: e.target.value
            })
        }
    }


  render(){
    return (
      <Form onSubmit = {this.handleSubmit}>
        <FormGroup row>
          <Label for="Name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange}  type="text" name="text" id="name" placeholder="enter your name" />
          </Col>
        </FormGroup>
  
  
        <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange}  type="email" name="email" id="email" placeholder="enter your email" />
          </Col>
        </FormGroup>
  
  
  
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Room Type</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
  
  
  
        
        <FormGroup row>
          <Label for="Email" sm={2}>Arrival Date</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="arrival" placeholder="enter your email" />
          </Col>
        </FormGroup>
  
  
        
        <FormGroup row>
          <Label for="Email" sm={2}>Depature Date</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="depature" placeholder="enter your email" />
          </Col>
        </FormGroup>
  
  
  
  
  
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
    
        <FormGroup tag="fieldset" row>
          <Label className="col-form-label col-sm-2">Free Pickup</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                No
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
          <button  className="float-right btn btn-primary">Submit</button>
      </Form>
    );
  }
 
}


export default Reaservation_form
