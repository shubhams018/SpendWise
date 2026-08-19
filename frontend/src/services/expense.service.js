import axios from "axios";

    async function getSummary() {
    const response = await axios.get(
        "http://localhost:3000/api/expense/summary",
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
        "http://localhost:3000/api/expense",
        
        {
            params,
             withCredentials: true

            }
        );
        return response
    }


    async function addExpenses(formData) {
         const response = await axios.post(
        "http://localhost:3000/api/expense/",
        formData,
        {
            withCredentials: true
        }
    );

    return response;

    }


    async function deleteExpenses(id) {
    const response = await axios.delete(
        `http://localhost:3000/api/expense/${id}`,
        {
            withCredentials: true
        }
    );

    return response;
   }

   async function updateExpenses(id,formData) {
    const response = await axios.patch(
        `http://localhost:3000/api/expense/${id}`,
        
        formData,
        {
            withCredentials: true
        }
    );

    return response;
   }

   async function getExpense(id) {
    
    const response = await axios.get(
        `http://localhost:3000/api/expense/${id}`,
        {
            withCredentials: true
        }
    );

    return response;
   }


export { getSummary, getExpenses, addExpenses, deleteExpenses, updateExpenses, getExpense }