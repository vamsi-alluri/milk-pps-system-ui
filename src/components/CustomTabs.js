import { Tabs, Tab } from 'react-bootstrap';

const CustomTabs = ({ defaultKey, tabs, onSelect }) => {
  return (
    <Tabs
      defaultActiveKey={defaultKey || (tabs.length > 0 ? tabs[0].key : '')}
      onSelect={onSelect}
      className="mb-3"
      mountOnEnter
      unmountOnExit
    >
      {tabs.map(({ key, title, component }) => (
        <Tab eventKey={key} title={title} key={key}>
          {component}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
