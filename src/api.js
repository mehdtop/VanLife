export async function GetVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw new Error("Could not get vans");

    }
    const data = await res.json()
    return data.vans
}
export async function getVansId(id){
const res=await fetch(`/api/vans/${id}`)
if(!res.ok)throw new Error('could not find van')
const data = await  res.json()
return data.vans
}
export async function getListVans(){
    const res=await fetch("/api/host/vans")
    if(!res.ok)throw new  Error('could not find the list of vans')
    const vanslist=await res.json();
return vanslist.vans;
}

export async function getListVansDetail(id){
    const res=await fetch(`/api/host/vans/${id}`)
    if(!res.ok)throw new Error ('could not find the van details')
    const list=await res.json();
return list.vans[0]
}

    