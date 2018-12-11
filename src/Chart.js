import React, { Component } from 'react';
import logo from './logo.svg';
import './Chart.css';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import  './dist/css/AdminLTE.min.css';
//import './dist/css/skins/_all-skins.min.css';
//import './plugins/iCheck/flat/blue.css';


class Chart extends Component {
  render() {
    return (
      <div className="content-wrapper">
    <section className="content-header">
      <h1>
        ChartJS
        <small>Preview sample</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Charts</a></li>
        <li className="active">ChartJS</li>
      </ol>
    </section>

   
    <section className="content">
      <div className="row">
        <div className="col-md-6">
       
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Area Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div className="chart">
                <canvas id="areaChart style250" ></canvas>
              </div>
            </div>
            
          </div>
      
          <div className="box box-danger">
            <div className="box-header with-border">
              <h3 className="box-title">Donut Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <canvas id="pieChart style250"></canvas>
            </div>
           
          </div>
         

        </div>
        
        <div className="col-md-6">
          
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Line Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div className="chart">
                <canvas id="lineChart style250" ></canvas>
              </div>
            </div>
            
          </div>
        

         
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Bar Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div className="chart">
                <canvas id="barChart style230" ></canvas>
              </div>
            </div>
            
          </div>
        

        </div>
      
      </div>
      

    </section>
 
  </div>
    );
  }
}

export default Chart;
