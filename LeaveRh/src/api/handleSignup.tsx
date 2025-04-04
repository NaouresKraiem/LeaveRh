import supabase from "../../supabaseClient";

export const handleSignup = async (data: {
  email: string;
  password: string;
  name?: string;
}) => {
  try {
    const { email, password, name } = data;

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || "",
        },
      },
    });

    if (authError) throw authError;

    if (authData.user) {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .insert({
          id: authData.user.id,
          email,
          name: name || "",
          created_at: new Date().toISOString(),
        })
        .select();

      if (userError) throw userError;
      console.log("User created:", userData);
    }

    return { success: true, user: authData.user };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, error };
  }
};
