import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Alert, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState<string>('');
  const [isAvatarA, setIsAvatarA] = useState<boolean>(true);

  // URLs de exemplo (você pode trocar por qualquer uma)
  const avatarA = 'https://i.pravatar.cc/300?img=11';
  const avatarB = 'https://i.pravatar.cc/300?img=12';

  const handleSalvar = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira um nome antes de salvar.');
      return;
    }
    Alert.alert('Perfil Salvo', `O perfil de "${nome}" foi atualizado com sucesso!`);
  };

  const toggleImage = () => setIsAvatarA(!isAvatarA);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.content}
      >
        <Text style={styles.headerTitle}>Perfil Rápido</Text>

        {/* Topo: Imagem Circular com Toggle */}
        <TouchableOpacity onPress={toggleImage} activeOpacity={0.8}>
          <Image 
            source={{ uri: isAvatarA ? avatarA : avatarB }} 
            style={styles.avatar} 
            resizeMode="cover"
          />
          <Text style={styles.toggleText}>Toque para trocar a foto</Text>
        </TouchableOpacity>

        {/* Meio: Campo de Texto Largo */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Seu Nome</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite seu nome completo..."
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Base: Botão Grande Salvar */}
        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>SALVAR PERFIL</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 40,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75, // Metade da largura/altura para ficar circular
    borderWidth: 4,
    borderColor: '#FFF',
    marginBottom: 10,
  },
  toggleText: {
    color: '#007AFF',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    color: '#333',
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});