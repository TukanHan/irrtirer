using System;
using System.Numerics;
using System.Threading;

namespace Irrtirer.Generator.Helpers
{
    internal class RandomFactory
    {
        readonly ThreadLocal<Random> random;
        private int seed;

        public RandomFactory(int? seed = null)
        {
            this.seed = seed ?? Environment.TickCount;
            this.random = new ThreadLocal<Random>(() => new Random(Interlocked.Increment(ref this.seed)));
        }

        public Random GetRandomObject()
        {
            return random.Value;
        }

        public int Next(int min, int max)
        {
            return random.Value.Next(min, max);
        }

        public float Next(float min, float max)
        {
            return random.Value.Next(min, max);
        }

        public Vector2 NextPointInsideCircle()
        {
            return random.Value.NextPointInsideCircle();
        }

        public Vector2 RandomPointInTriangle(Vector2[] triangleVertices)
        {
            return random.Value.RandomPointInTriangle(triangleVertices);
        }
    }
}
