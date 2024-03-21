import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css"


const SearchBar = (props) => {

    const { onSetSearchQuery, fetchData } = props

    return (
        <header>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values) => {
                    if (!values.query) {
                        toast('Field cannot be empty')
                        return
                    }
                    fetchData(values.query, true)
                    onSetSearchQuery(values.query)
                }}>
                <Form className={css.formSearch}>
                    <label className={css.labelSearch}>
                        <Field className={css.inputSearch}
                            name="query"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos" />
                    </label>



                    <button className={css.submitBtn} type="submit" title="Search" aria-label="Search">Search</button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        toastOptions={{
                            className: '',
                            duration: 5000,
                            style: {
                                background: '#363636',
                                color: '#fff',

                            }
                        }} />
                </Form>
            </Formik>

        </header>
    )
}

export default SearchBar;