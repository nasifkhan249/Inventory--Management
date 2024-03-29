
import CurrencyFormat from "react-currency-format";

const ExpenseReport = () => {


    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <h5 >Expense Report by Date</h5>
                                <hr className="bg-light"/>

                                <div className="col-4 p-2">
                                    <label className="form-label">Date Form:</label>
                                    <input  className="form-control form-control-sm" type="date"/>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="form-label">Date To:</label>
                                    <input className="form-control form-control-sm" type="date"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 p-2">
                                    <button className="btn btn-sm my-3 btn-success">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">

                                            <h6>Total: <CurrencyFormat value={'Total'} displayType={'text'} thousandSeparator={true} prefix={'$ '} /> </h6>
                                            <button className="btn btn-sm my-2 btn-success">Download CSV</button>
                                            <button className="btn btn-sm my-2 ms-2 btn-success">Download XLS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
               
            </div>
        </div>
    );
};

export default ExpenseReport;