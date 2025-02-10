using System;
using System.Collections.Generic;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    [Flags]
    internal enum ModificationOperation
    {
        None = 0,
        Add = 1,
        Transform = 2,
        Change = 4,
        Rotate = 8,
    }

    internal static class ModificationOperationRandomExtension
    {
        static Dictionary<ModificationOperation, int> operationPriorities = new Dictionary<ModificationOperation, int>()
        {
            [ModificationOperation.Add] = 30,
            [ModificationOperation.Transform] = 50,
            [ModificationOperation.Change] = 30,
            [ModificationOperation.Rotate] = 30,
        };

        public static ModificationOperation RandomModificationOperation(this Random random, ModificationOperation possibleAction)
        {
            int posibleActionPosibilitySum = 0;
            foreach (var action in operationPriorities)
            {
                if (possibleAction.HasFlag(action.Key))
                {
                    posibleActionPosibilitySum += action.Value;
                }
            }

            int value = random.Next(0, posibleActionPosibilitySum);

            foreach (var action in operationPriorities)
            {
                if (possibleAction.HasFlag(action.Key))
                {
                    if (value <= action.Value)
                    {
                        return action.Key;
                    }

                    value -= action.Value;
                }
            }

            return ModificationOperation.None;
        }
    }
}
