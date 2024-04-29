import { NavbarCms } from './cms_molecules/Navbar';



export const NavbarPreview = ({ entry }:{entry:any}) => {
  const data = entry.getIn(['data']).toJS();
  console.log("the preview is reacd")

  return (
    <div>
      <NavbarCms 
        size={data.size}
        color={data.buttonConfig.color}
        edge={data.buttonConfig.edge}
      />
    </div>
  );
};

// You would typically not execute CMS configuration code here directly.
// It's better to do this in a separate setup file or entry point script.
