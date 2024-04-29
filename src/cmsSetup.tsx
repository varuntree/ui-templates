import { NavbarCms } from './cms_molecules/Navbar/index';
import CMS from 'decap-cms-app';
console.log("the compnenis loded")
export function NavbarPreview({ entry }:{entry:any}) {
    const data = entry.getIn(['data']).toJS();
    return (
        <div>
            <NavbarCms 
                size={data.size}
                color={data.buttonConfig.color}
                edge={data.buttonConfig.edge}
            />
        </div>
    );
}

// Register the preview template with CMS
CMS.registerPreviewTemplate('navbar', NavbarPreview);
