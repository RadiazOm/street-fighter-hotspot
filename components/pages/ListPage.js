import {ScrollView, StatusBar, Text, View} from "react-native";
import ListItem from "../ListItem";
import List from "../List";




const ListPage = ({navigation}) => {

    return(
        <View>
            <List navigation={navigation}/>
        </View>
    )
}

export default ListPage