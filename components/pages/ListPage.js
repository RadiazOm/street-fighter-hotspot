import {ScrollView, StatusBar, Text, View} from "react-native";
import ListItem from "../ListItem";
import List from "../List";
import IconButton from "../IconButton";
import myLocationIcon from "../../assets/icons/myLocationIcon.png"



const ListPage = () => {

    return(
        <View>
            <IconButton image={myLocationIcon}/>
            <List/>
        </View>
    )
}

export default ListPage