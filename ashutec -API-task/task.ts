import { Request, Response, Headers } from 'cross-fetch';
import fetch from "cross-fetch";


interface data_api {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string

}
const url = 'https://reqres.in/api/users';

function getAPI<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })

        .then(data => data.data)
        .catch(err => console.log(err.message))
}

async function getUser() {
    const res: data_api[] = await getAPI(url);

    res.push({ id: 7, email: "khushbu@gmail.com", first_name: "khushbu", last_name: "yadav", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuwEr4Yg2UWn-c5WMV2HvJm4qQ4wEQ318TnxRA2nvPPdd8A8PcUrzCEIPBQF0EVZdN8w&usqp=CAU" });
    console.log("New data Added:", res);

    const newId: number = 1;
    const index: number = res.findIndex(data => data.id === newId);
    console.log(index)
    res.slice(index, 1);


    return res;
}
getUser();

// async function update() {
//     let data_update: data_api[] = await getUser();
//     console.log(data_update);
//     // const updateId = 7;
//     const find_data = data_update.find((data) => {
//         if (data.id === 7)
//             data.email = "xyz@gmail.com",
//                 data.first_name = "xyz",
//                 data.last_name = "kdfgjf",
//                 data.avatar = "https://dkfndgkldf.snsdf"

//     });
//     console.log(find_data);
// }
// update();

