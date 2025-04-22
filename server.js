'use server'


export const handleFormDataSubmit = async (prevState,formdata) => {
    
    const payload = {};

    if (!formdata.name) {
      return { error: "Name is required !!" };
    }
  };