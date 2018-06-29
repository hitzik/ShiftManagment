import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class LeftMiddle extends Component {
  render() {
    return (
      <div>
          <br/>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>                
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default LeftMiddle;