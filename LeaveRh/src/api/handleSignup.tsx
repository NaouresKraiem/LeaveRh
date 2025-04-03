import supabase from "../../supabaseClient";

export const handleSignup = async (
  email: string,
  password: string,
  name: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Signup Error:", error.message);
    return { error };
  }

  const user = data.user;

  if (user) {
    const { error: insertError } = await supabase
      .from("users")
      .insert([{ id: user.id, name: name, email }]);

    if (insertError) {
      console.error("Error inserting user:", insertError.message);
      return { error: insertError };
    }
  }

  return { data };
};
