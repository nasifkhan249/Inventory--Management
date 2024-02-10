
import { Fragment } from 'react';

const CustomerCreateUpdate = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <h5>Save Customer</h5>
                                    <hr className="bg-light"/>

                                    <div className="col-4 p-2">
                                        <label className="form-label">Customer Name</label>
                                        <input className="form-control form-control-sm" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="form-label">Mobile No</label>
                                        <input className="form-control form-control-sm" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="form-label">Email </label>
                                        <input className="form-control form-control-sm" type="text"/>
                                    </div>
                                    <div className="col-12 p-2">
                                        <label className="form-label">Address</label>
                                        <textarea className="form-control form-control-sm" rows={4}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <button className="btn btn-sm my-3 btn-success">Save Change</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CustomerCreateUpdate;
