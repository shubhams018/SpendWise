import axios from "axios";

    async function getSummary() {
    const response = await axios.get(
        "https://spendwise-cngo.onrender.com/api/expense/summary",
        {
            withCredentials: true
        }
    );

    return response;
    }


    async function getExpenses(page, limit, sort, category, from, to) {

    const params = {
                        page,
                        limit
                    };

                if (sort) {
                    params.sort = sort;
                }
                if (category) {
                    params.category = category;
                }

                if (from) {
                    params.from = from;
                }

                if (to) {
                    params.to = to;
                }

    const response = await axios.get(
        "https://spendwise-cngo.onrender.com/api/expense",
        
        {
            params,
             withCredentials: true

            }
        );
        return response
    }


    async function addExpenses(formData) {
         const response = await axios.post(
        "https://spendwise-cngo.onrender.com/api/expense/",
        formData,
        {
            withCredentials: true
        }
    );

    return response;

    }


    async function deleteExpenses(id) {
    const response = await axios.delete(
        `https://spendwise-cngo.onrender.com/api/expense/${id}`,
        {
            withCredentials: true
        }
    );

    return response;
   }

   async function updateExpenses(id,formData) {
    const response = await axios.patch(
        `https://spendwise-cngo.onrender.com/api/expense/${id}`,
        
        formData,
        {
            withCredentials: true
        }
    );

    return response;
   }

   async function getExpense(id) {
    
    const response = await axios.get(
        `https://spendwise-cngo.onrender.com/api/expense/${id}`,
        {
            withCredentials: true
        }
    );

    return response;
   }


export { getSummary, getExpenses, addExpenses, deleteExpenses, updateExpenses, getExpense }