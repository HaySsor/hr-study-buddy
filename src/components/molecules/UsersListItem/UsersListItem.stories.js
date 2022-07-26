import UsersListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
};

const mockedData = {
  name: 'Adam Romański',
  attendance: '55%',
  averge: '4.0',
};

const Template = (args) => <UsersListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '4.0',
  },
};
export const GoodMarks = Template.bind({});
GoodMarks.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '5.0',
  },
};
export const BadMarks = Template.bind({});
BadMarks.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '2.0',
  },
};
