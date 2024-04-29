import { NavbarCms } from "../../cms_molecules/Navbar"


export function NavbarPreview({entry}:{entry: any}){
    const data = entry.getIn(['data']).toJS()
    return (
        <div>
            <NavbarCms 
                size={data.buttonConfig.size}
                color={data.buttonConfig.color}
                edge={data.buttonConfig.edge}
            />
            helo this is indeeed workding
            <h1>this i sthe most intresting thing</h1>
        </div>
    )
}