

const ProductCreateUpdate = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <h5>Save Product Type</h5>
                                <hr className="bg-light"/>
                                <div className="col-4 p-2">
                                    <label className="form-label">Product Name</label>
                                    <input className="form-control form-control-sm" type="text"/>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="form-label">Product Brand</label>
                                    <select className="form-select form-select-sm">
                                        <option value="">Select Brand</option>
                                        <option value="brand_id_1">Brand 1</option>
                                        <option value="brand_id_2">Brand 2</option>
                                        {/* Add options dynamically */}
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="form-label">Product Category</label>
                                    <select className="form-select form-select-sm">
                                        <option value="">Select Category</option>
                                        <option value="category_id_1">Category 1</option>
                                        <option value="category_id_2">Category 2</option>
                                        {/* Add options dynamically */}
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="form-label">Unit</label>
                                    <input className="form-control form-control-sm" type="text"/>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="form-label">Details</label>
                                    <input className="form-control form-control-sm" type="text"/>
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
    );
};

export default ProductCreateUpdate;
