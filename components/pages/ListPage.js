import { View } from "react-native";
import List from "../List";

// component for list, kinda not needed
const ListPage = ({navigation}) => {

    return(
        <View>
            <List navigation={navigation}/>
        </View>
    )
}

export default ListPage