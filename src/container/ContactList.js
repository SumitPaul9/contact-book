import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact';
import { deleteAllContact, clearAllContact, selectAllContact } from '../actions/contactActions'
import { useEffect, useState } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContacts = useSelector(state => state.contact.selectedContacts)
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContact(contacts.map((contact)=> contact.id)))
    } else{
      dispatch(clearAllContact());
    }
  }, [selectAll])
    
  return (
        <div className="container">
          
          { selectedContacts.length > 0 ? (
              <button
                className="btn btn-danger mb-3"
                onClick={()=>dispatch(deleteAllContact())}
              > Delete all</button>
            ) : null
          }

            <table className="table shadow">
              <thead>
                <tr>
                  <th>
                    <div className="custom-control custom-checkbox">
                      <input 
                          type="checkbox" 
                          className="custom-control-input"
                          id="selectAll"
                          value={selectAll}
                          onClick={ ()=>setSelectAll(!selectAll)}
                      />
                      <label
                          htmlFor="selectAll"
                          className="custom-control-label"
                      ></label>
                    </div>
                  </th>

                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { contacts.map((contact)=>(
                    <Contact contact={contact} key={ contact.id } selectAll={selectAll}/>
                ))}
              </tbody>
            </table>
        </div>
    )
}

export default ContactList
