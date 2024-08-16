using System.Numerics;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Irrtirer.Helpers
{
    internal class TempVertexModel
    {
        public float X { get; set; }
        public float Y { get; set; }

        public TempVertexModel()
        {
            X = 0;
            Y = 0;
        }

        public TempVertexModel(float x, float y)
        {
            X = x;
            Y = y;
        }

        public Vector2 ToVector2()
        {
            return new Vector2(X, Y);
        }
    }

    public class Vector2JsonConverter : JsonConverter<Vector2>
    {
        public override Vector2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            TempVertexModel? tempVertexModel = JsonSerializer.Deserialize<TempVertexModel>(ref reader, options);
            return (tempVertexModel ?? new TempVertexModel()).ToVector2();
        }

        public override void Write(Utf8JsonWriter writer, Vector2 value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize(writer, new TempVertexModel(value.X, value.Y), options);
        }
    }
}
