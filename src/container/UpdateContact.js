
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../actions/contactActions';


const UpdateContact = () => {
    
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");
    
    const contact = useSelector(state => state.contact.contact)

    useEffect(() => {
        
        if (contact != null) {
          setName(contact.name);
          setphoneNumber(contact.phone);
          setEmail(contact.email);
        }
        dispatch(getContact(id));
      }, [contact]);

    const update_Contact = {
        id: id,
        name: name,
        phone: phoneNumber,
        email: email,
    }

    const OnupdateContact = (e)=>{
        e.preventDefault();
        dispatch(updateContact(update_Contact));
        history.push("/");
        // <Redirect to="/" />
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Update Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => OnupdateContact(e)}>
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
                    Update Contact
                </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateContact
