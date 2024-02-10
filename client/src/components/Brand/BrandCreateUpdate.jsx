


const BrandCreateUpdate = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <h5>Save Brand</h5>
                                <hr className="bg-light" />
                                <div className="col-4 p-2">
                                    <label className="form-label">Brand Name</label>
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 p-2">
                                    <button className="btn btn-sm my-3 btn-success">
                                        Save Change
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCreateUpdate;
