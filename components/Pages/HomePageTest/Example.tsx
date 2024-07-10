import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import { Tabs, TabScreen, TabsProvider, useTabIndex, useTabNavigation } from "react-native-paper-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import CardItem from "./CardItem";

const cardItems = [
  { id: 1, name: "Test 1", lastText: "Hey there tell", time: "5:27 PM" },
  { id: 2, name: "Test 2", lastText: "Not doing anything", time: "Yesterday" },
  { id: 3, name: "Test 3", lastText: "Hey there", time: "Yesterday" },
  { id: 4, name: "Test 4", lastText: "Not doing anything", time: "Yesterday" },
  { id: 5, name: "Test 5", lastText: "Here we go", time: "Yesterday" },
  { id: 6, name: "Test 6", lastText: "Lets go", time: "Yesterday" },
  { id: 7, name: "Test 7", lastText: "Hey there", time: "Yesterday" },
  { id: 8, name: "Test 8", lastText: "Not doing anything", time: "Yesterday" },
  { id: 9, name: "Test 9", lastText: "Here we go", time: "Yesterday" },
];

function Example() {
  return (
    <View style= {styles.root} >
      <Appbar.Header
        style={{
          backgroundColor: "#008069",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction
          onPress={() => {}}
          style={{
            width: 20,
          }}
        />
        <Appbar.Content
          title="WhatsApp"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
          }}
        />
        <Appbar.Action icon="magnify" iconColor="#fff" onPress={() => {}} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          iconColor="#fff"
        />
      </Appbar.Header>
      <TabsProvider defaultIndex={0}>
        <Tabs
          uppercase={false}
          style={{ backgroundColor: "#008069" }}
          tabLabelStyle={{
            color: "#fff",
            fontSize: 13,
            fontWeight: "700",
            borderBottomColor: "#fff",
          }}
        >
          <TabScreen icon="camera" label="">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="CHATS" badge={33}>
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="STATUS">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
          <TabScreen label="CALLS">
            <View style={{ backgroundColor: "red", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <ScrollView style={{}}>
        {cardItems.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 ,
              
    }}>
      <Title style= {styles.titleText}>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}

export default Example;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
    paddingTop: 70,
  },
  titleText: {
  },
});
