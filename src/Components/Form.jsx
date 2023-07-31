import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        fetch(
            "https://script.google.com/macros/s/AKfycbyrUN_alt64D-0ZiB9NdoS-YIzY06hqBmhN5b37hm_WO0YOJHBDJ3eQHIsSlFVaf7FuTA/exec",
            {
                method: "POST",
                body: formDatab,
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });

        navigate("/result");
    };

    return (
        <div className="Form">
            <div className="form-face">
                <h3 className="title">
                    <strong> Order Your Food </strong>
                </h3>
                <br />
                <p className="header"></p>
                <br />
                <div>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-starter">
                        <div className="label-select">
                                <label>Date</label><br />
                                <input className='label-date'
                                    type="Date"
                                    id="Date"
                                    name="Date"
                                    required
                                />
                            </div><br />
                            <div className="label-select">
                                <label>Your Name</label>
                                <br />
                                <input
                                    className="label"
                                    placeholder="Name"
                                    name="Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="label-select">
                                <label>Mobile Number</label>
                                <br />
                                <input
                                    className="label"
                                    placeholder="Mobile Number"
                                    name="Mobile"
                                    type="number"
                                    required
                                />
                            </div>
                            <div className="label-select">
                                <label>Address</label><br />
                                <input className='label'
                                    placeholder="Address"
                                    name="Address"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="label-select">
                                <label for="cars">Food Items</label><br />
                                <select name="Food_Items" required>
                                    <option className='label-option'
                                        value="Rajma Chawal"> Rajma Chawal </option>
                                    <option className='label-option'
                                        value="Kadhi Chawal"> Kadhi Chawal </option>
                                </select><br /><br />
                            </div>
                            <div className="label-select">
                                <label for="cars">Plate Size</label><br />
                                <select name="Plate_Size" required>
                                    <option className='label-option'
                                        value="Full Plate"> Full Plate ₹60/- </option>
                                    <option className='label-option'
                                        value="Half Plate"> Half Plate ₹40/- </option>
                                </select><br /><br />
                            </div>
                            <div className="label-select">
                                <label>No. of Plate</label><br />
                                <select name="Count" required>
                                    <option className='label-option'
                                        value="1"> 1 </option>
                                    <option className='label-option'
                                        value="2"> 2 </option>
                                        <option className='label-option'
                                        value="3"> 3 </option>
                                    <option className='label-option'
                                        value="4"> 4 </option>
                                        <option className='label-option'
                                        value="5"> 5 </option>
                                    <option className='label-option'
                                        value="6"> 6 </option>
                                        <option className='label-option'
                                        value="7"> 7 </option>
                                    <option className='label-option'
                                        value="8"> 8 </option>
                                        <option className='label-option'
                                        value="9"> 9 </option>
                                        <option className='label-option'
                                        value="10"> 10 </option>
                                    <option className='label-option'
                                        value="11"> 11 </option>
                                    <option className='label-option'
                                        value="12"> 12 </option>
                                        <option className='label-option'
                                        value="13"> 13 </option>
                                    <option className='label-option'
                                        value="14"> 14 </option>
                                        <option className='label-option'
                                        value="15"> 15 </option>
                                    <option className='label-option'
                                        value="16"> 16 </option>
                                        <option className='label-option'
                                        value="17"> 17 </option>
                                    <option className='label-option'
                                        value="18"> 18 </option>
                                        <option className='label-option'
                                        value="19"> 19 </option>
                                        <option className='label-option'
                                        value="20"> 20 </option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="label-select">
                            <label>Any Note</label><br />
                            <input className='label-note' placeholder="Note" name="Note" type="text" />
                        </div><br />
                        <input className="sch-button" type="submit" />
                    </form>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Form;
