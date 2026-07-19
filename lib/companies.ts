import { companies } from "@/data/companies";


export function getCompany(id:string){

    return companies.find(
        company => company.id === id
    );

}
