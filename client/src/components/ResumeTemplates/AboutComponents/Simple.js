import { Divide } from '../helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../helper/Style';
const About = ({ detail, style, color }) => {
  return (
    <View style={{ ...Style.view, ...style }}>
      <Divide title="Objective" style={{color: "#803bec"}} />
      <Text style={Style.subText}>
        {detail}
      </Text>
    </View>
  );
};

export default About;
