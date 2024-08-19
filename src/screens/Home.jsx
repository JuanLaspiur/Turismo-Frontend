import React from "react";
import { StyleSheet, View, ActivityIndicator, Dimensions, Text } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Header from "../components/Header";
import ImagesContainer from "../components/Home/ImagesContainer";

function Home() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const { height } = Dimensions.get('window');

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loader} size="large" color="#000000" />;
  }

  return (
    <View style={styles.container}>
      <Header name={'People Like'} />
      <ImagesContainer name={'Imagen nombre'} lugar={'lugar, país'} />
      <View style={styles.textCard}>
        <Text style={styles.cardTitle}>Feel de Freedom</Text>
        <Text style={styles.cardText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eos ratione eius earum blanditiis, ducimus sint laudantium odio corporis ab amet non cumque. Cum similique vero ratione repellat totam in dolorem quasi necessitatibus optio voluptate dolores quaerat nihil fuga consequatur amet rem recusandae eaque ipsam vel, officia accusamus vitae itaque ducimus pariatur? Dolores unde, inventore libero velit incidunt temporibus suscipit, perspiciatis neque aperiam maxime similique labore odit quasi distinctio quam? Quae, dolorem? Optio molestiae inventore cum eum saepe ipsam maxime corporis voluptatem unde, ad, omnis illo enim nulla error repudiandae modi aut ab voluptatum assumenda quo. Consequuntur ipsum quis aliquid impedit ad rerum non rem aspernatur libero nobis ex maiores, deserunt, laborum ducimus enim quam voluptatem culpa incidunt voluptas labore quos omnis. Quibusdam harum, et illum iusto rem nostrum saepe molestiae optio quae. Illum molestiae nemo vel ipsa delectus quibusdam qui laborum cum accusantium quas praesentium, fugiat sunt inventore nulla voluptatibus at itaque officiis facere quod numquam dolore obcaecati! Quidem velit, magni aspernatur blanditiis perferendis soluta ratione, facilis animi optio necessitatibus suscipit corrupti cupiditate, sapiente dignissimos delectus saepe unde? Excepturi aspernatur esse doloremque, rerum eveniet ab cum est tenetur quae, aliquid consectetur aliquam culpa porro reprehenderit non pariatur hic incidunt animi! Doloremque, consequuntur! Quasi doloribus dicta ducimus quos quas molestiae! Id, ratione rerum. Optio quo animi officia maiores reprehenderit asperiores beatae debitis cum nemo ut itaque accusantium enim repudiandae natus odio tempore, id, cupiditate cumque. Non neque quia tenetur voluptatem iste, distinctio dolore, explicabo porro quos quae necessitatibus dolores doloremque. Id ipsum non consequatur quisquam, itaque labore! Corporis assumenda nobis harum modi ducimus eius velit, aut eos et at tenetur maxime, deleniti laborum totam nisi ab! Ratione natus corporis minima suscipit libero hic assumenda voluptatem, sed, dolorum ullam laudantium facere quae, aliquid quidem ipsam possimus numquam ipsum vero consectetur delectus.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textCard: {
    width: '88%',
    height: Dimensions.get('window').height * 0.18,
    marginHorizontal: 'auto',
    marginTop: 20,
    overflow: 'hidden',
    padding: 10, 
    textAlign:'justify' 
 },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 26, 
    color:'gray'
    
  },
});

export default Home;

