import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const ProductList = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-4">
                                        <h5> Product List</h5>
                                    </div>
                                    <div className="col-2">
                                        <input placeholder="Text Filter" className="form-control form-control-sm"/>
                                    </div>
                                    <div className="col-2">
                                        <select className="form-control mx-2 form-select-sm form-select form-control-sm">
                                            <option value="20">20 Per Page</option>
                                            <option value="30">30 Per Page</option>
                                            <option value="50">50 Per Page</option>
                                            <option value="100">100 Per Page</option>
                                            <option value="200">200 Per Page</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                            <button className="btn  btn-success btn-sm mb-0" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive table-section">
                                            <table className="table ">
                                                <thead className="sticky-top bg-white">
                                                    <tr>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Unit</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Brand</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Categories</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Details</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><p className="text-xs text-start">Product 1</p></td>
                                                        <td><p className="text-xs text-start">Unit 1</p></td>
                                                        <td><p className="text-xs text-start">Brand 1</p></td>
                                                        <td><p className="text-xs text-start">Category 1</p></td>
                                                        <td><p className="text-xs text-start">Details 1</p></td>
                                                        <td>
                                                            <Link to={`/ProductCreateUpdatePage?id=1`} className="btn text-info btn-outline-light p-2 mb-0 btn-sm">
                                                                <AiOutlineEdit size={15} />
                                                            </Link>
                                                            <button className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2">
                                                                <AiOutlineDelete size={15} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    {/* Add more rows dynamically */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <nav aria-label="Page navigation example">
                                        <ReactPaginate
                                                    previousLabel="<"
                                                    nextLabel=">"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount=""
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange=""
                                                    containerClassName="pagination"
                                                    activeClassName="active"
                                                />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
