import CharacterPage from "../pages/CharacterPage";
import {createStackNavigator} from "@react-navigation/stack";
import ListPage from "../pages/ListPage";

const ListStack = createStackNavigator()


const ListStackScreen = () => {

    // Stack for list, so we can go to characterPage once clicked on the card
    return (
        <ListStack.Navigator>
            <ListStack.Screen name={"List"} component={ListPage}/>
            <ListStack.Screen name={"Character"} component={CharacterPage}/>
        </ListStack.Navigator>
    )
}



export default ListStackScreen