import { useFormik } from 'formik'
import './App.css';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';


const validateSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phonenumber: Yup.string().min(10, 'Phone Number Max 10 Digit').required('Phone Number is required'),
});

const initialvalues = {
  name: "",
  email: "",
  phonenumber: "",

}
function App() {

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues: initialvalues,
    validationSchema: validateSchema,
    onSubmit: (values,{resetForm}) => {
      alert("Form Submited...");
      resetForm();
      
    }
  })


  return (

    <>
<>

<div className="d-flex justify-content-center align-items-center min-vh-100">
  <div className="container p-4 border rounded shadow" style={{ maxWidth: "600px" }}>
    <form onSubmit={handleSubmit}>
    <div className=' row g-3'>
          <center><h2>Form - Validation</h2></center>
          <div className="col-md-12">
            <label htmlFor="inputEmail1" className="form-label">Your Name</label>
            <input type="text"
              className="form-control"
              id="inputEmail1"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur} />

            {errors.name && touched.name ? (<span className="error text-danger">{errors.name}</span>) : null}

          </div>
        </div>
         <div className='row g-3'>
          <div className="col-md-12">
            <label htmlFor="inputEmail3" className="form-label">Email</label>
            <input type="text"
              className="form-control"
              id="inputEmail3"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} />

            {errors.email && touched.email ? (<span className="error text-danger">{errors.email}</span>) : null}

          </div>
        </div>
         <div className='row g-3'>
          <div className="col-md-12">
            <label htmlFor="inputphone" className="form-label">Phone Number</label>
            <input type="number"
              className="form-control"
              id="inputPhone"
              name="phonenumber"
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur} />

            {errors.phonenumber && touched.phonenumber ? (<span className="error text-danger">{errors.phonenumber}</span>) : null}

          </div>
        </div>
        <div className='row g-3 mt-2'>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
          </div>
    </form>
  </div>
</div>


     
      </>
    </>


  )
}
export default App;
