import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerShown="false"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="SettingsStack"
                component={SettingsScreen}
            />
            <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
        </SettingsStack.Navigator>
    );
};