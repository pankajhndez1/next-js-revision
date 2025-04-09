'use server'


export const handleFormDataSubmit = async (prevState,formdata) => {
    console.log(formdata, "formdata");
    const payload = {};

    if (!formdata.name) {
      return { error: "Name is required !!" };
    }
  };