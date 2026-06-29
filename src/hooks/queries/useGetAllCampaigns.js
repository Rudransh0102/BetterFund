import { useQuery } from 'react-query'
import client from '../../client'

const useGetAllCampaigns = () => {
    return useQuery(["campaigns"], async()=>{
        try {
            const campaigns = await client.getAllCampaigns();
            return campaigns || [];
        } catch (error) {
            console.error("Error fetching campaigns:", error);
            return [];
        }
    }, {
        retry: false,
        refetchOnWindowFocus: false,
        initialData: []
    })
}

export default useGetAllCampaigns