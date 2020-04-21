import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TableList from "../../component/TableList";
import "./style.css";
class Tables extends Component {
  state = {
    table: [],
    waitList: [],
  };

  componentDidMount() {
    this.fetchCoustomer();
  }
  deleteCustomerById = async (id) => {
    try {
      const response = await axios.delete(`/api/customer/${id}`);
      this.fetchCoustomer();
    } catch (e) {
      console.log(e);
    }
  };
  fetchCoustomer = () => {
    axios.get("/api/customer").then((res) => {
      //console.log(res.data.length);
      let dataPost = res.data;
      // let dataCopy = [...dataPOst];
      let waitListCopy = [];
      let tableCopy = [];
      for (let i = 0; i < dataPost.length; i++) {
        if (tableCopy.length > 10) {
          waitListCopy.push(dataPost[i]);
        } else {
          tableCopy.push(dataPost[i]);
        }
      }
      this.setState({
        table: tableCopy,
        waitList: waitListCopy,
      });
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1>
            <i className='fa fa-fire'></i> Hot Restaurant
          </h1>
          <hr></hr>
          <h5>
            We only have 10 tables! Book your seat before they are all gone!
          </h5>
          <button type='button' className='btn btn-danger'>
            <Link className='nav-link' to='/'>
              Home
            </Link>{" "}
            <i className='fa fa-id-card-o'></i>
          </button>
        </div>
        <div className='list'>
          <label className='table'>
            <span>TableList</span>
          </label>
          <div className='tableList'>
            <TableList
              items={this.state.table}
              handleDelete={this.deleteCustomerById}
            />
          </div>
          <br></br>
          <label className='wait'>
            <span>WaitList</span>
          </label>
          <div className='waitList'>
            <TableList
              items={this.state.waitList}
              handleDelete={this.deleteCustomerById}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Tables;
