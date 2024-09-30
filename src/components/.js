<Card
key={id}
  elevation={4}
  style={{
    height: 270 * scale,
    marginRight: 10 * scale,
    marginLeft: 10 * scale,
    backgroundColor: colors.Quaternary,
    shadowColor: colors.white,
    borderRadius: 30 * scale,
    justifyContent: 'center',
    marginTop: 30* scale,
  }}>
  <Card.Content
    style={{
      justifyContent: 'space-between',
      marginLeftdcerfvr: 20* scale,
    }}>
    <Text
      style={{
        color: colors.primary,
        fontSize: 23 * scale,
        textAlign: 'center',
        marginBottom: 20* scale,
        fontWeight: 'bold',
      }}>
      peripherique N#
    </Text>

    <View
      style={{
        marginBottom: 20* scale,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 17 * scale,

            marginRight: 5 * scale,
          }}>
          Type :
        </Text>

        <Text
          style={{
            color: colors.secondary,
            fontSize: 17 * scale,
            fontWeight: 'bold',
          }}>
          Mobile
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 17 * scale,

            marginRight: 5 * scale,
          }}>
          Acces :
        </Text>

        <Text
          style={{
            color: colors.secondary,
            fontSize: 17 * scale,
            fontWeight: 'bold',
          }}>
          Admin
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 17 * scale,

            marginRight: 5 * scale,
          }}>
          Adresse IP :
        </Text>

        <Text
          style={{
            color: colors.secondary,
            fontSize: 17 * scale,
            fontWeight: 'bold',
          }}>
          192.168.123.132
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: colors.white,
            fontSize: 17 * scale,

            marginRight: 5 * scale,
          }}>
          Adresse MAC :
        </Text>

        <Text
          style={{
            color: colors.secondary,
            fontSize: 17 * scale,
            fontWeight: 'bold',
          }}>
          00:1B:44:11:3A:B7
        </Text>
      </View>
    </View>

    <View style={{justifyContent: 'center'}}>
      <Button
        style={{
          width: 170* scale,
          backgroundColor: colors.primary,
          marginHorizontal: 'auto',
          borderRadius: 10* scale,

          color: colors.Quaternary,
        }}
        mode="contained"
        onPress={showModal2}>
        <Text
          style={{
            color: colors.Quaternary,
            fontSize: 17 * scale,
            fontWeight: 'bold',
          }}>
          Modifier
        </Text>
      </Button>

      {/* hna push up */}
    </View>
  </Card.Content>
</Card>