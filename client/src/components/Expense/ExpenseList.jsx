import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit } from "react-icons/ai"
import ReactPaginate from 'react-paginate';
import CurrencyFormat from 'react-currency-format';

const ExpenseList = () => {
    return (
        <Fragment>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4">
                                            <h5>Expense List</h5>
                                        </div>
                                        <div className="col-2">
                                            <input placeholder="Text Filter" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="col-2">
                                            <select className="form-control mx-2 form-select-sm form-select form-control-sm" >
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
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">#No</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Type</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Amount</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Note</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* Map through DataList and render table rows */}
                                                        {/* Replace placeholders with actual data */}

                                                        <tr>
                                                                <td><p className="text-xs text-start">i</p></td>
                                                                <td><p className="text-xs text-start">=Name</p></td>
                                                                <td><p className="text-xs text-start">
                                                                    <CurrencyFormat displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                                </p></td>
                                                                <td><p className="text-xs text-start">Note</p></td>
                                                                <td>
                                                                    <Link to={`/ExpenseCreateUpdatePage?id=${"_id"}`} className="btn text-info btn-outline-light p-2 mb-0 btn-sm">
                                                                        <AiOutlineEdit size={15} />
                                                                    </Link>
                                                                    <button className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2">
                                                                        <AiOutlineDelete size={15} />
                                                                    </button>
                                                                </td>
                                                            </tr>
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
                                                    pageCount={10} // Replace with actual total page count
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
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
        </Fragment>
    );
};

export default ExpenseList;
