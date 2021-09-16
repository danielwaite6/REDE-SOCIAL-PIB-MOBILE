import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList, Image } from 'react-native';

interface HourProps {
  selected: boolean;
};

interface IDentistrys {
  id: string;
  name: string;
  email: string;
};

interface IPatients {
  id: string;
  name: string;
  email: string;
  cel1: string;
  cel2: string;
};


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #5F9EA0;
    margin-top: 15px;
    margin-left: 10px;
    padding: 5px;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
  text-align: center;
`;

export const OkButton = styled(RectButton)`
  background: #ff9000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
`;





export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding-top: 8px;
`

export const ContainerWrapper = styled.View`
    padding-left: 14px;
`

export const Main = styled.ScrollView`
    
`

export const CalendarContainer = styled.View`
  
  
`;


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*export const PatientList = styled(FlatList as new () => FlatList<PatientsFiltered>)`
  margin-top: 10px;
  margin-right: 12px;
  margin-bottom: 60px;
`;*/

export const DentistrysList = styled(FlatList as new () => FlatList<IDentistrys>).attrs({
  contentContainerStyle: {
    paddingBottom: 400
  }
})`
  margin-top: 10px;
  margin-right: 12px;
  margin-bottom: 60px;
`;

export const PatientsList = styled(FlatList as new () => FlatList<IPatients>).attrs({
  contentContainerStyle: {
    paddingBottom: 400
  }
})`
  margin-top: 10px;
  margin-right: 12px;
  margin-bottom: 60px;
`;



export const PatientAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 36px;
  background: #ff9000;
`;

export const DentistrysContainer = styled.TouchableOpacity`
  background: #3e3b47;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 1px;
  flex-direction: row;
  align-items: center;
`;

export const DentistrysInfo = styled.View`
  margin-left: 20px;
`;

export const DentistrysName = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  margin-left: 10px;
`;

export const DentistrysMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const DentistrysMetaText = styled.Text`
  margin-left: 8px;
  color: #5F9EA0;
  font-weight: bold;
  font-size: 22px;
`;

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

export const Schedule = styled.ScrollView`
  /**padding: 24px 0 16px; */
`;



export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #999591;
  margin: 0 24px 12px;
`;



export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;


export const Hour = styled(RectButton) <HourProps>`
  padding: 12px;
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;
`;

export const HourText = styled.Text<HourProps>`
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  font-size: 16px;
`;
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
    width: 186px;
    height: 186px;
    border-radius: 98px;
    border-width: 1px;
    border-color: #3e3b47;
    margin-top: 64px;
    margin-left: 8px;
    margin-right: 8px;
    align-self: center;
    margin-bottom: 30px;
    background: #f4ede8;
`;

export const TitleAvatar = styled.Text`
    font-size: 18px;
    color: #5F9EA0;
    margin-left: 35px;
    margin-top:  50px;
`;

export const Avatar = styled.Image`
    width: 72px;
    height: 72px;
    border-radius: 36px;
    background-color: #ff9000;
`;