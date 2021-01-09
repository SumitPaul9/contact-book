import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { createContact } from '../actions/contactActions';

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const newContact = {
        id: shortid.generate(),
        name: name,
        phone: phoneNumber,
        email: email,
    }

    const create_Contact = (e)=>{
        e.preventDefault();
        dispatch(createContact(newContact));
        history.push("/");
        // <Redirect to="/" />
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => create_Contact(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your E-mail Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Create Contact
                </button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
