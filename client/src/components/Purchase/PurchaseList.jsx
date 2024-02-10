import {Fragment} from 'react';

import { AiOutlineEye } from 'react-icons/ai';

import ReactPaginate from "react-paginate";
import moment from "moment";
import CurrencyFormat from "react-currency-format";




const PurchaseList = () => {

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
                                            <h5>Purchase List</h5>
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
                                                <option value="100">200 Per Page</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                <button  className="btn  btn-success btn-sm mb-0" type="button">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive table-section">
                                                <table className="table ">
                                                    <thead className="sticky-top bg-white">
                                                    <tr>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Supplier</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Grand Total</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Shipping Cost</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Vat/Tax</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Other Cost</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Discount</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                   
                                                            <tr>
                                                                <td>
                                                                    <p className="text-xs text-start">{"suppliers"}</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        <CurrencyFormat value={"GrandTotal"} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                                    </p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        <CurrencyFormat value={"ShippingCost"} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                                    </p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        <CurrencyFormat value={"VatTax"} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                                    </p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        <CurrencyFormat value={"OtherCost"} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                                    </p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        <CurrencyFormat value={"Discount"} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                                    </p>
                                                                </td>


                                                                <td>
                                                                    <p className="text-xs text-start">{moment().format('MMMM Do YYYY')}</p>
                                                                </td>

                                                                <td>
                                                                    <button className="btn btn-outline-light text-success p-2 mb-0 btn-sm ms-2">
                                                                        <AiOutlineEye size={15} />
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
        </Fragment>
    );
};

export default PurchaseList;