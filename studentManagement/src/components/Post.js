import axios from "axios";
import { useFormik } from "formik";
function Post() {
  const formik = useFormik({
    initialValues: {
      task1: "",
      task2: "",
      task3: "",
      id: "",
    },
    onSubmit: async (values) => {
      console.log("Form submission data", values);
      let response = await axios.post(" http://localhost:3000/students", values);
      alert(response.status);
    },
  });

  return (
    <div>
      <h1>add a new student</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="task1">student name</label>
        <input
          type="text"
          id="task1"
          name="task1"
          onChange={formik.handleChange}
          value={formik.values.task1}
        />
        <br />
        <label htmlFor="task2">phone number</label>
        <input
          type="text"
          id="task2"
          name="task2"
          onChange={formik.handleChange}
          value={formik.values.task2}
        />
        <br />
        <label htmlFor="task3">class</label>
        <input
          type="text"
          id="task3"
          name="task3"
          onChange={formik.handleChange}
          value={formik.values.task3}
        />
        <br />
        <label htmlFor="id">
          <span id="p3">id</span>
        </label>
        <input
          type="text"
          id="id"
          name="id"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <br />

        <button type="submit" >post!</button>
      </form>
    </div>
  );
}

export default Post;
